export async function test() {
    const a = await $fetch('/test');
    // date is Date
    const b = await $fetch('/test2');
    // date1 is string, date2 is Date
}