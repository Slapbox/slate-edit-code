export default function(plugin, change) {
    return plugin.onKeyDown(
        {
            preventDefault() {},
            stopPropagation() {},
            key: 'Tab',
            shiftKey: true
        },
        change,
        {}
    );
}
