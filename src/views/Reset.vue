<script>
    import PasswordField from "@/components/PasswordField.vue";

    export default {
        components: {
            PasswordField
        }
    }
</script>

<template>
    <div class="main-wrapper teal accent-4">
        <div class="container">
            <div class="row">
                <div class=" col s12 l8 offset-l2 center-align white-text">
                    <h1>Reset Password</h1>

                    <!-- <ErrorMessage /> -->

                    <!-- <SuccessMessage /> -->

                    <div class="card teal accent-4">
                        <div class="card-content">
                            <form method="post" action="/reset/">
                                <div class="form-container">
                                    <div class="input-field">
                                        <label class="auth-form-label">Password</label>
                                        <PasswordField elemId="password" />
                                    </div>
                                    <div class="input-field">
                                        <label class="auth-form-label">Repeat Password?</label>
                                        <PasswordField elemId="repeatPassword" />
                                    </div>
                                    <div>
                                        <button class="btn btn-large waves-effect waves-light"
                                            type="button">Send</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>