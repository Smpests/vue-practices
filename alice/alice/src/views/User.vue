<style scoped>
.head-pic {
	height: 80px;
	width: 80px;
}
<style>
<template>
	<div class="container">
		<div class="peson-msg row">
			<span class="head-pic"></span>
			<div class="msg">
				<h1 class="nick-name"></h1>
				<p calss="phone"></p>
			</div>
		</div>
		<div class="func">
			<router-link to="/">My Blogs</router-link>
			<router-link to="/">Favourite</router-link>
			<router-link to="/">Edit Personal Information</router-link>
			<router-link to="/me">Log Out</router-link>
		</div>
	</div>
</template>
<script>
import $ from 'jquery'

export default {
	name: 'user',
	mounted: function() {
		$(document).ready(function() {
			console.log('user.vue ready to go');
			$('.head-pic').attr('background-image', 'url(img/172356420975864.gif)');
			$('.nick-name').text('alice_20181228');
			$('.phone').text('20181228');
		});
	}
}
</script>