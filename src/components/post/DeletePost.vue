<script>
    import { PostAPI } from '@/helpers/post';

    export default {
        props: {
            id: {
                type: String,
                required: true
            }
        },
        async mounted() {
            let elems = document.querySelectorAll('.modal');
            M.Modal.init(elems)
            
        },
        methods: {
            async submit() {
                let response = await PostAPI.deletePost(this.id);

                if (response.status == 'success') {
                    this.$emit('update:modelValue', this.id);

                } else {
                    this.inProgress = false;
                }
		    }   
        }
    }
</script>

<template>
    <div id="modal_post_delete" class="modal" :key="$route.params.lang">
        <div class="modal-content">
            <p>{{ $t('message.confirm_delete', { type: $t('message.post') }) }}</p>
        </div>
        <div class="modal-footer">
            <a class="modal-close waves-effect waves-green btn-flat">{{ $t('message.cancel') }}</a>
            <a @click="submit" class="modal-close waves-effect waves-green btn-flat btn red lighten-2 white-text">{{ $t('message.yes') }}</a>
        </div>
    </div>
</template>