<script>
    import { PostAPI } from "@/helpers/post";
    import { getLang } from "@/helpers/helper";

    export default {
        props: {
            id: {
                type: String
            }
        },
        async mounted() {
            let elems = document.querySelectorAll('.modal');
            M.Modal.init(elems)

        },
        methods: {
            getLang,
            async submit() {
                let response = await PostAPI.deleteImage(this.id);

                if (response.status == 'success') {
                    this.$router.push({ name: 'my-post-list', params: { lang: getLang() } });

                } else {
                    this.inProgress = false;
                }
            }
        }
    }
</script>

<template>
    <div id="modal_post_image" class="modal">
        <div class="modal-content">
            <p>{{ $t('message.confirm_delete', { type: $t('message.image') }) }}</p>
        </div>
        <div class="modal-footer">
            <a href="#!" class="modal-close waves-effect waves-green btn-flat">{{ $t('message.cancel') }}</a>
            <a href="#!" @click="submit"
                class="modal-close waves-effect waves-green btn-flat btn red lighten-2 white-text">{{ $t('message.yes')
                }}</a>
        </div>
    </div>
</template>