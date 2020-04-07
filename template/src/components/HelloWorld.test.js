{{#useVuex}}
import Vue from "vue";
import Buefy from "buefy";
Vue.use(Buefy);

{{/useVuex}}
import buildComponentMounter from "@modules/util";
import HelloWorld from "@components/HelloWorld.vue";

const componentMounter = buildComponentMounter(HelloWorld, {
    msg: "Hello World"
});

describe("HelloWorld.vue", () => {

    it("Should render correctly", () => {
        const wrapper = componentMounter();
        expect(wrapper.html()).toMatchSnapshot();
    });

    it("Should render message", () => {
        const wrapper = componentMounter();
        const target = wrapper.find("h1");
        expect(target.text()).toBe("Hello World")
    })

});
