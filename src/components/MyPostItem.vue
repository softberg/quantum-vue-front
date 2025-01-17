<script>
    export default {
        props: {
            post: Object
        }
    }
</script>
<template>
	<li class="collection-item avatar">
		<!-- <?php if ($post['image']): ?> -->
		<img v-if="post.image" :src="'/' + (post.image || 'assets/images/no-image.png')" class="circle img-my-post">
		<!-- <?php else: ?> -->
		<!-- <img src="<?php echo base_url() ?>/assets/images/no-image.png" class="circle img-my-post"> -->
		<!-- <?php endif; ?> -->
		<span class="title post-title" title="<?php echo $post['title'] ?>">
			<a class="teal-text post-title"
				href="<?php echo base_url() . '/' . current_lang() . '/post/' . $post['uuid'] ?>">
				<!-- <?php echo $post['title'] ?> -->
			</a>
		</span>
		<p>
			<!-- <?php echo date('m/d/Y H:i', strtotime($post['updated_at'])) ?? '' ?> <br> -->
			<!-- <?php echo $post['author'] ?? '' ?> -->
		</p>

		<router-link 
            :to="{ name: 'amend', params: { uuid: post.id, lang: this.$i18n.locale } }"
            class="secondary-content edit-my-post" 
            :title="$t('message.edit')" 
            style="right: 50px;">
            <i class="material-icons dp48">edit</i>
        </router-link>
		<a href="#modal-confirm" class="secondary-content modal-trigger"
			data-url="<?php echo base_url() . '/' . current_lang() ?>/my-posts/delete/<?php echo $post['uuid'] ?>">
			<i class="material-icons dp48">delete</i>
		</a>
	</li>
</template>