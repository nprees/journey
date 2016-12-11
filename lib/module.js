var Module = {};

Module.Vis = {
    Module: function (selector, options) {
        return d3.select(selector).append('svg').chart('module', options);
    }
};