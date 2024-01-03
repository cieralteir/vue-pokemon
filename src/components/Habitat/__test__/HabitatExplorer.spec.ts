import { nextTick } from "vue";
import { mount } from "@vue/test-utils";
import { beforeEach, describe, expect, test } from "vitest";
import { createPinia, setActivePinia } from "pinia";
import HabitatExplorer from "@/components/Habitat/HabitatExplorer.vue";

describe("Habitat Explorer", () => {
  const habitatName = "sea";

  beforeEach(() => {
    // creates a fresh pinia and makes it active
    // so it's automatically picked up by any useStore() call
    // without having to pass it to it: `useStore(pinia)`
    setActivePinia(createPinia());
  });

  test("explores on mount", () => {
    const wrapper = mount(HabitatExplorer, {
      props: { habitatName },
      global: {
        stubs: ["FontAwesomeIcon"],
      },
    });
    expect(wrapper.text()).toContain(`Exploring ${habitatName} ...`);
  });

  test("encounters pokemon", async () => {
    const wrapper = mount(HabitatExplorer, {
      props: { habitatName },
      global: {
        stubs: ["FontAwesomeIcon"],
      },
    });
    await wrapper.vm.fetchHabitat();
    await wrapper.vm.explore();
    expect(wrapper.text()).toContain("You've stumbled upon a wild");
  });

  test("catch encountered pokemon", async () => {
    const wrapper = mount(HabitatExplorer, {
      props: {
        habitatName,
      },
      global: {
        stubs: ["FontAwesomeIcon"],
      },
    });
    await wrapper.vm.fetchHabitat();
    await wrapper.vm.explore();
    wrapper.find("#catch-btn").trigger("click");
    await nextTick();
    expect(wrapper.find("[data-test='catch-outcome']").text()).toBeTruthy();
  });

  test("run from encountered pokemon", async () => {
    const wrapper = mount(HabitatExplorer, {
      props: {
        habitatName,
      },
      global: {
        stubs: ["FontAwesomeIcon"],
      },
    });
    await wrapper.vm.fetchHabitat();
    await wrapper.vm.explore();
    expect(wrapper.find("#run-btn").text()).toBe("RUN");
    wrapper.find("#run-btn").trigger("click");
    await nextTick();
    expect(wrapper.text()).toContain(`Exploring ${habitatName} ...`);
  });
});
