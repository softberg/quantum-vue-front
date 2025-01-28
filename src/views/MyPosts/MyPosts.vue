<template>
	<router-view v-slot="{ Component, route }">
        <transition name="fade" mode="out-in">
            <div :key="route.name" class="post-form full-height main-inner">
                <component :is="Component"></component>
            </div>
        </transition>
    </router-view>
</template>
