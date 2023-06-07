import Fieldtype from "./components/fieldtypes/TogglePassword.vue";
import Example from "./components/fieldtypes/ExampleFieldtype.vue";

// Should be named [snake_case_handle]-fieldtype

Statamic.booting(() => {
    Statamic.$components.register("toggle_password-fieldtype", Fieldtype);
    Statamic.$components.register("example-fieldtype", Example);
});
