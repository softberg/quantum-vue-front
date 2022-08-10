<script>
import Bubbles from '@/components/Bubbles.vue';

export default {
	components: {
		Bubbles
	}
}
</script>
<template>
	<div class="main-wrapper teal accent-4 full-height">
		<div class="container wrapper center-align white-text">
			<h1 class="main-title">About</h1>
			<div class="card teal">
				<div class="card-content">
					<h6>
						Quantum is a free, open-source PHP web framework under MIT license, specially designed
						to
						develop
						very fast web applications with modular structure. With Quantum it’s easy to start any
						kind
						of
						project immediately, wather it\'s regular websites or complex API based service, at the
						same
						time it
						allows to keep the code clean, organized through all the development process.
					</h6>

					<h4>Version</h4>
					<h6>Current version is: 2.8</h6>

					<h4>Installation</h4>
					<ul class="step-list">
						<li>
							<h6>Create new project</h6>
							<code>&gt; composer create-project quantum/project {project name}</code>
						</li>
						<li>
							<h6>Run the project</h6>
							<code>&gt; php qt serve</code>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<Bubbles />
</template>
