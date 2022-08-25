<script>
export default {
	data() {
		return {
			langs: [
				{ key: 'en', text: 'English' },
				{ key: 'ru', text: 'Russian' },
				{ key: 'am', text: 'Armenin' }
			]
		}
	}
}
</script>

<template>
	<a class="dropdown-trigger main-menu-link" href="javascript:;" data-target="dropdown2">
		<i class="material-icons dp48 left">language</i>
		<small class="hide-on-small-only show-on-medium-and-up">EN</small>
	</a>
	<ul id="dropdown2" class="dropdown-content">
		<li v-for="lang in langs" :key="lang.id">
			<router-link to="{{ lang.id }}">{{ lang.text }}</router-link>
		</li>
	</ul>
</template>
