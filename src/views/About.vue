<script>
    import Bubbles from "@/components/Bubbles.vue";

    export default {
        data() {
            return {
                appVersion: import.meta.env.VITE_APP_VERSION,
            }
        },
        components: {
            Bubbles
        }
    }
</script>

<template>
    <div class="main-wrapper teal accent-4 full-height">
        <div class="container wrapper center-align white-text">
            <h1 class="main-title">{{ $t('message.about') }}</h1>
            <div class="card teal accent-4">
                <div class="card-content">
                    <h6>{{ $t('message.about_framework') }}</h6>

                    <h4>{{ $t('message.version') }}</h4>
                    <h6>{{ $t('message.current_version', { version: this.appVersion }) }}</h6>

                    <h4>{{ $t('message.installation') }}</h4>
                    <ul class="step-list">
                        <li>
                            <h6>{{ $t('message.create_project') }}</h6>
                            <code>&gt; composer create-project quantum/project {project name}</code>
                        </li>
                        <li>
                            <h6>{{ $t('message.run_server') }}</h6>
                            <code>&gt; php qt serve</code>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <Bubbles />
</template>