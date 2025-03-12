<script>
    export default {
        props: {
            message: {
                type: String,
                required: true,
                length: false
            },
            type: {
                type: String,
                required: true
            }
        },
        mounted() {
            console.log();
        }
    }
</script>

<template>
    <div :class="['material-alert', type]">
        <ul class="left-align" v-if="(message instanceof Object)">
            <li v-for="( line, i ) in message" :key="i">
                {{ line instanceof Object ? line[0] : line }}
            </li>
        </ul>
        <span v-else>
            {{ message }}
        </span>
    </div>
</template>