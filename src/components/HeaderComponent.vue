<template>
    <header>
        <div class="container-header">
            <nav class="navigation-header">
            <span class="box-span">
                <div class="icon-span">
                    <mdicon class="vicon" name="home" :height="20" :width="20" fill="black" />
                </div>
                <div class="text-span">
                    <router-link>Home</router-link> 
                </div>
            </span>
            <span class="box-span">
                <div class="icon-span">
                    <mdicon class="vicon" name="account-group" :height="20" :width="20" fill="black" />
                </div>
                <div class="text-span">
                    <router-link>Members</router-link> 
                </div>
            </span>
            <span class="box-span">
                <div class="icon-span">
                    <mdicon class="vicon" name="note-text-outline" :height="20" :width="20" fill="black" />
                </div>
                <div class="text-span">
                   <router-link>Projects</router-link> 
                </div>
            </span>
        </nav>
        </div>
    </header>
</template>