import { shallowMount, mount } from "@vue/test-utils";

function buildComponentMounter(component, defaultProps, isShallow=true) {

    return (props={}) => {

        const propsData = Object.assign(defaultProps, props);

        if (isShallow) {
            return shallowMount(component, {propsData});
        }
        else {
            return mount(component, {propsData});
        }

    };

};

export default buildComponentMounter;
