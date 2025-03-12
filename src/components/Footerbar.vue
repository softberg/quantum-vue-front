<script>
    import { QUANTUM_PHP_FRAMEWORK, LEARN_MORE_LINK } from "@/constants";

    export default {
        data() {
            return {
                QUANTUM_PHP_FRAMEWORK,
                LEARN_MORE_LINK
            }
        }
    }
</script>

<template>
	<div class="footer-copyright teal accent-4">
		<div class="container">
			<div class="row">
				<div class="col s12 l10 footer-text">
					© 2018 - {{ new Date().getFullYear() }} {{ QUANTUM_PHP_FRAMEWORK }}
				</div>
				<div class="col s12 l2 footer-text">
					<a :href="LEARN_MORE_LINK" target="_blank" class="white-text">{{ $t('message.learn_more') }}</a>
				</div>
			</div>
		</div>
	</div>
</template>