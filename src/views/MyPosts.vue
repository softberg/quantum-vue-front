<template>
	<div class="posts-container">
		<h2 class="center-align teal-text">
			My Posts
		</h2>
		<div class="row post_container">
			<!-- <?php if (count($posts)): ?> -->
			<ul class="collection">
				<!-- <?php foreach ($posts as $post): ?> -->
				<!-- <?php echo partial('post/partials/my-post-item', ['post' => $post]) ?> -->
				<!-- <?php endforeach; ?> -->
			</ul>
		</div>
		<!-- <?php else: ?>
		<h4 class="center-align">
			No new posts...
			Try creating one
		</h4>
		<?php endif; ?> -->

		<!-- <?php echo partial('post/partials/modal', ['item' => t('common.the_post')]) ?> -->

		<!-- <?php if (auth()->check()): ?> -->
		<div class="fixed-action-btn">
			<a class="btn-floating btn-large waves-effect waves-light blue-grey darken-1 hoverable"
				href="/my-posts/create"><i class="material-icons">add</i>
			</a>
		</div>
		<!-- <?php endif; ?> -->
	</div>
</template>