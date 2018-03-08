<template>
    <div>
        {{result}}
    </div>
</template>

<script>
    export default {
        props: ['data'],
        data() {
            return {};
        },
        computed: {
            result: {
                get() {
                    console.log(this.data, 'Data in sunshine getters')
                    return this.data;
                },
                set(newValue) {
                    console.log(newValue, 'Data in sunshine setters')
                    this.data = newValue;
                }
            }
        }
    }
</script>

<style scoped>

</style>