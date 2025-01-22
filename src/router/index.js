import { createRouter, createWebHistory } from 'vue-router'
import auth from "@/middlewares/auth";
import guest from "@/middlewares/guest";
import i18n from '../i18n/index';

const router = createRouter({
    setPageTitle: (title) => {
        document.title = router.options.defaultPageTitle;

        if (title) {
            document.title = i18n.global.t(title) + ' | ' + router.options.defaultPageTitle;
        }
    },
    defaultPageTitle: 'Quantum PHP App',
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/:lang?',
			name: '',
			component: () => import('@/views/Main.vue'),
			children: [
				{
					path: '',
					name: 'home',
					component: () => import('@/views/Home.vue'),
				},
				{
					path: 'about',
					name: 'about',
                    meta: { title: 'message.about' },
					component: () => import('@/views/About.vue')
				},
				{
					path: 'posts',
					name: 'posts',
                    meta: { title: 'message.posts' },
					component: () => import('@/views/Posts.vue')
				},
				{
					path: 'post/:id',
					name: 'post',
					component: () => import('@/views/Post.vue')
				},
				{
					path: 'signin',
					name: 'signin',
					component: () => import('@/views/Signin.vue'),
					meta: {
                        middleware: guest,
                        title: 'message.signin'
                    }
				},
				{
					path: 'signup',
					name: 'signup',
					component: () => import('@/views/Signup.vue'),
					meta: {
                        middleware: guest,
                        title: 'message.signup'
                    }
				},
				{
					path: 'forget',
					name: 'forget',
					component: () => import('@/views/Forget.vue'),
					meta: {
                        middleware: guest,
                        title: 'message.forget_password'
                    }
				},
				{
					path: 'reset/:token',
					name: 'reset',
					component: () => import('@/views/Reset.vue'),
					meta: {
                        middleware: guest,
                        title: 'message.reset'
                    }
				},
				{
					path: 'verify/:token',
					name: 'verify',
					component: () => import('@/views/Verify.vue'),
					meta: {
                        middleware: guest,
                        title: 'message.verify'
                    }
				},
				{
					path: 'my-posts',
					name: 'my-posts',
					component: () => import('@/views/MyPosts.vue'),
					meta: {
                        middleware: auth,
                        title: 'message.my_posts'
                    }
				},
                {
                    path: 'my-posts/create',
                    name: 'create',
                    component: () => import('@/views/Create.vue'),
                    meta: {
                        middleware: auth,
                        title: 'message.new_post'
                    },
                },
                {
                    path: 'my-posts/amend/:id',
                    name: 'amend',
                    component: () => import('@/views/Amend.vue'),
                    meta: {
                        middleware: auth,
                        title: 'message.update_post'
                    },
                }
			],
		},
		{
			path: '/:pathMatch(.*)*',
			name: 'not-found',
			component: () => import('@/views/NotFound.vue')
		},
	]
});

router.isReady().then(() => {
    router.options.setPageTitle(router.currentRoute.value.meta.title);
});

router.beforeEach(async (to, from, next) => {
    router.options.setPageTitle(to.meta.title);

	if (to.meta.middleware) {
		let state = await to.meta.middleware();

		if (!state) {
			router.push({ name: 'home' });
		}
	}

	next();
});

export default router;
