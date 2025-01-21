<script>
    import axiosInstance from "../../helpers/axiosInstance";

    export default {
        name: 'my-post-item',
        props: {
            post: Object,
            id: {
                type: String
            }
        },
        data() {
            return {
                base_url: import.meta.env.VITE_BASE_URL
            }
        },
        methods: {
            formatDateTime(dateTime, format) {
                let now = new Date(dateTime || '');
                let year = now.getFullYear();
                let month = String(now.getMonth() + 1).padStart(2, '0');
                let day = String(now.getDate()).padStart(2, '0');
                let hours = String(now.getHours()).padStart(2, '0');
                let minutes = String(now.getMinutes()).padStart(2, '0');
                let seconds = String(now.getSeconds()).padStart(2, '0');

                return format
                        .replace('YYYY', year)
                        .replace('MM', month)
                        .replace('DD', day)
                        .replace('HH', hours)
                        .replace('mm', minutes)
                        .replace('ss', seconds);
            },
        }
    }
</script>
<template>
	<li class="collection-item avatar">
		<!-- <?php if ($post['image']): ?> -->
		<img v-if="post.image" :src="this.base_url + '/uploads/' + (post.image || 'assets/images/no-image.png')" class="circle img-my-post">
		<!-- <?php else: ?> -->
		<!-- <img src="<?php echo base_url() ?>/assets/images/no-image.png" class="circle img-my-post"> -->
		<!-- <?php endif; ?> -->

        <router-link 
            :to="{ name: 'post', params: { id: post.id, lang: this.$i18n.locale } }"
            class="title post-title teal-text" 
            :title="post.title">
            {{ post.title }}
        </router-link>
        <p>{{ this.formatDateTime(post.date, 'MM/DD/YYYY HH:mm') }}</p>

        <!-- <span class="title post-title" title="<?php echo $post['title'] ?>">
        <a class="teal-text post-title" href="<?php echo base_url(true) . '/' . current_lang() . '/post/' . $post['id'] ?>">
            <?php echo $post['title'] ?>
        </a>
    </span>
    <p>
        <?php echo date('m/d/Y H:i', strtotime($post['date'])) ?? '' ?> <br>
    </p> -->
		<p>
			<!-- <?php echo date('m/d/Y H:i', strtotime($post['updated_at'])) ?? '' ?> <br> -->
			<!-- <?php echo $post['author'] ?? '' ?> -->
		</p>

		<router-link 
            :to="{ name: 'amend', params: { id: post.id, lang: this.$i18n.locale } }"
            class="secondary-content edit-my-post" 
            :title="$t('message.edit')" 
            style="right: 50px;">
            <i class="material-icons dp48">edit</i>
        </router-link>
        
		<a href="#modal_post_delete" class="secondary-content modal-trigger"
            :id="post.id"
            @click="$emit('update:modelValue', post.id)"
			:title="$t('message.delete')">
			<i class="material-icons dp48">delete</i>
		</a>
	</li>
</template>