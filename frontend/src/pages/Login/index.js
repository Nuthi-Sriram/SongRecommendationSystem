import DOMPurify from "dompurify";
import React, { useEffect } from 'react'
import styled from 'styled-components'
// import GithubCorner from 'react-github-corner'
import { withRouter } from 'react-router-dom'
import { Grid } from '../../styled'
import getAccessToken from '../../utils/getAccessToken'

const myHTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="description" content="">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

<title>Razo - Radio HTML Template | Home</title>

<link rel="icon" href="../img/core-img/favicon.ico">

<link rel="stylesheet" href="../style.css">
</head>
<body>

<div id="preloader">
<div>
<div class="spinner">
<div class="double-bounce1"></div>
<div class="double-bounce2"></div>
</div>
<span>Wait, please...</span>
</div>
</div>


<div class="top-search-area">
<div class="modal fade" id="searchModal" tabindex="-1" role="dialog" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered" role="document">
<div class="modal-content">
<div class="modal-body">

<button type="button" class="btn close-btn" data-dismiss="modal"><i class="fa fa-times"></i></button>
 
<form action="index.html" method="post">
<input type="search" name="top-search-bar" class="form-control" placeholder="Type keywords and hit enter...">
<button type="submit">Search</button>
</form>

<div class="search-btn"><i class="icon_search"></i></div>
</div>
</div>
</div>
</div>
</div>


<div class="razo-social-share-area">
<a href="index.html#" class="facebook"><i class="fa fa-facebook"></i></a>
<a href="index.html#" class="twitter"><i class="fa fa-twitter"></i></a>
<a href="index.html#" class="pinterest"><i class="fa fa-pinterest"></i></a>
<a href="index.html#" class="instagram"><i class="fa fa-instagram"></i></a>
<a href="index.html#" class="youtube"><i class="fa fa-youtube-play"></i></a>
<a href="index.html#" class="ss-close-btn"><i class="arrow_right"></i></a>
</div>


<header class="header-area">

<div class="main-header-area">
<div class="classy-nav-container breakpoint-off">
<div class="container">

<nav class="classy-navbar justify-content-between" id="razoNav">

<a class="nav-brand" href="index.html"><img src="../img/core-img/logo.png" alt=""></a>

<div class="classy-navbar-toggler">
<span class="navbarToggler"><span></span><span></span><span></span></span>
</div>

<div class="classy-menu">

<div class="classycloseIcon">
<div class="cross-wrap"><span class="top"></span><span class="bottom"></span></div>
</div>

<div class="classynav">
<ul id="nav">
<li><a href="index.html">Home</a></li>
<li><a href="index.html#">Pages</a>
<ul class="dropdown">
<li><a href="index.html">- Home</a></li>
<li><a href="charts.html">- Charts</a></li>
<li><a href="single-charts.html">- Charts Details</a></li>
<li><a href="podcast.html">- Podcast</a></li>
<li><a href="single-podcast.html">- Podcast Details</a></li>
<li><a href="show.html">- Show</a></li>
<li><a href="events.html">- Event</a></li>
<li><a href="blog.html">- Blog</a></li>
<li><a href="single-blog.html">- Blog Details</a></li>
<li><a href="index.html#">- Dropdown</a>
<ul class="dropdown">
<li><a href="index.html#">- Dropdown Item</a></li>
<li><a href="index.html#">- Dropdown Item</a></li>
<li><a href="index.html#">- Dropdown Item</a></li>
<li><a href="index.html#">- Dropdown Item</a></li>
</ul>
 </li>
</ul>
</li>
<li><a href="show.html">Shows</a></li>
<li><a href="charts.html">Charts</a></li>
<li><a href="podcast.html">Podcasts</a></li>
<li><a href="index.html#">Mega</a>
<div class="megamenu">
<ul class="single-mega cn-col-4">
<li><a href="index.html">- Home</a></li>
<li><a href="charts.html">- Charts</a></li>
<li><a href="single-charts.html">- Charts Details</a></li>
<li><a href="podcast.html">- Podcast</a></li>
<li><a href="single-podcast.html">- Podcast Details</a></li>
</ul>
<ul class="single-mega cn-col-4">
<li><a href="show.html">- Show</a></li>
<li><a href="events.html">- Event</a></li>
<li><a href="blog.html">- Blog</a></li>
<li><a href="single-blog.html">- Blog Details</a></li>
<li><a href="index.html">- Home</a></li>
</ul>
<ul class="single-mega cn-col-4">
<li><a href="charts.html">- Charts</a></li>
<li><a href="single-charts.html">- Charts Details</a></li>
<li><a href="podcast.html">- Podcast</a></li>
<li><a href="single-podcast.html">- Podcast Details</a></li>
<li><a href="show.html">- Show</a></li>
</ul>
<ul class="single-mega cn-col-4">
<li><a href="show.html">- Show</a></li>
<li><a href="events.html">- Event</a></li>
<li><a href="blog.html">- Blog</a></li>
  <li><a href="single-blog.html">- Blog Details</a></li>
<li><a href="index.html">- Home</a></li>
</ul>
</div>
</li>
<li><a href="events.html">Events</a></li>
<li><a href="blog.html">Blog</a></li>
</ul>

<div class="social-share-icon">
<i class="social_share"></i>
</div>

<div class="search-icon" data-toggle="modal" data-target="#searchModal">
<i class="icon_search"></i>
</div>
</div>

</div>
</nav>
</div>
</div>
</div>
</header>


<section class="welcome-area">
<div class="welcome-slides owl-carousel">

<div class="single-welcome-slide bg-img bg-overlay" style="background-image: url(img/bg-img/1.jpg);">

<div class="welcome-content h-100">
<div class="container h-100">
<div class="row h-100 align-items-center justify-content-center">

<div class="col-12 col-md-9 col-lg-6">
<div class="welcome-text text-center">
<h2 data-animation="fadeInUpBig" data-delay="100ms">Designed For Music, Engineered to Last</h2>
<h5 data-animation="fadeInUpBig" data-delay="400ms">31st Dec - Night out party....Don't miss it</h5>
<a href="index.html#" class="btn razo-btn btn-2" data-animation="fadeInUpBig" data-delay="700ms">Book Now</a>
</div>
</div>
</div>
</div>
</div>
</div>

<div class="single-welcome-slide bg-img bg-overlay" style="background-image: url(img/bg-img/30.jpg);">

<div class="welcome-content h-100">
<div class="container h-100">
<div class="row h-100 align-items-center justify-content-center">

<div class="col-12 col-md-10 col-lg-6">
<div class="welcome-text text-center">
<h2 data-animation="fadeInUp" data-delay="100ms">Designed For Music, Engineered to Last</h2>
<h5 data-animation="fadeInUp" data-delay="400ms">31st Dec - Night out party....Don't miss it</h5>
<a href="index.html#" class="btn razo-btn btn-2" data-animation="fadeInUp" data-delay="700ms">Book Now</a>
</div>
</div>
</div>
</div>
</div>
</div>

<div class="single-welcome-slide bg-img bg-overlay" style="background-image: url(img/bg-img/32.jpg);">

<div class="welcome-content h-100">
<div class="container h-100">
<div class="row h-100 align-items-center justify-content-center">

<div class="col-12 col-md-10 col-lg-6">
<div class="welcome-text text-center">
<h2 data-animation="fadeInUp" data-delay="100ms">Designed For Music, Engineered to Last</h2>
<h5 data-animation="fadeInUp" data-delay="400ms">31st Dec - Night out party....Don't miss it</h5>
<a href="index.html#" class="btn razo-btn btn-2" data-animation="fadeInUp" data-delay="700ms">Book Now</a>
</div>
</div>
</div>
</div>
</div>
</div>

<div class="single-welcome-slide bg-img bg-overlay" style="background-image: url(img/bg-img/33.jpg);">

<div class="welcome-content h-100">
<div class="container h-100">
<div class="row h-100 align-items-center justify-content-center">

<div class="col-12 col-md-10 col-lg-6">
<div class="welcome-text text-center">
<h2 data-animation="fadeInUp" data-delay="100ms">Designed For Music, Engineered to Last</h2>
<h5 data-animation="fadeInUp" data-delay="400ms">31st Dec - Night out party....Don't miss it</h5>
<a href="index.html#" class="btn razo-btn btn-2" data-animation="fadeInUp" data-delay="700ms">Book Now</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>


<section class="razo-blog-area section-padding-80-0">
<div class="container">
<div class="row">

<div class="col-12 col-md-8">
<div class="weekly-news-area mb-50">

<div class="section-heading">
<h2>Blog New</h2>
</div>

<div class="featured-post-area bg-img bg-overlay mb-30" style="background-image: url(img/bg-img/11.jpg);">

<div class="post-overlay">
<div class="post-meta">
<a href="index.html#"><i class="fa fa-comments-o" aria-hidden="true"></i> 2.1k</a>
<a href="index.html#"><i class="fa fa-eye" aria-hidden="true"></i> 3.6k</a>
</div>
<a href="single-blog.html" class="post-title">The light and music exposition hits los angeles in the fashion week</a>
</div>
</div>
<div class="row">

<div class="col-12 col-md-6">
<div class="razo-single-post d-flex mb-30">

<div class="post-thumbnail">
<a href="single-blog.html"><img src="../img/bg-img/13.jpg" alt=""></a>
</div>

<div class="post-content">
<div class="post-meta">
<a href="index.html#"><i class="fa fa-comments-o" aria-hidden="true"></i> 2.1k</a>
<a href="index.html#"><i class="fa fa-eye" aria-hidden="true"></i> 3.6k</a>
</div>
<a href="single-blog.html" class="post-title">Drug bust leads police to underground tunnel</a>
</div>
</div>
</div>

<div class="col-12 col-md-6">
<div class="razo-single-post d-flex mb-30">

<div class="post-thumbnail">
<a href="single-blog.html"><img src="../img/bg-img/14.jpg" alt=""></a>
</div>

<div class="post-content">
<div class="post-meta">
<a href="index.html#"><i class="fa fa-comments-o" aria-hidden="true"></i> 2.1k</a>
<a href="index.html#"><i class="fa fa-eye" aria-hidden="true"></i> 3.6k</a>
</div>
<a href="single-blog.html" class="post-title">Hear abuse victims' messages for the Pope</a>
</div>
</div>
</div>

<div class="col-12 col-md-6">
<div class="razo-single-post d-flex mb-30">

<div class="post-thumbnail">
<a href="single-blog.html"><img src="../img/bg-img/15.jpg" alt=""></a>
</div>

<div class="post-content">
<div class="post-meta">
<a href="index.html#"><i class="fa fa-comments-o" aria-hidden="true"></i> 2.1k</a>
<a href="index.html#"><i class="fa fa-eye" aria-hidden="true"></i> 3.6k</a>
</div>
<a href="single-blog.html" class="post-title">New Mexico uspects' attorneys file to have all</a>
</div>
</div>
</div>

<div class="col-12 col-md-6">
<div class="razo-single-post d-flex mb-30">

<div class="post-thumbnail">
<a href="single-blog.html"><img src="../img/bg-img/16.jpg" alt=""></a>
</div>

<div class="post-content">
<div class="post-meta">
<a href="index.html#"><i class="fa fa-comments-o" aria-hidden="true"></i> 2.1k</a>
<a href="index.html#"><i class="fa fa-eye" aria-hidden="true"></i> 3.6k</a>
</div>
<a href="single-blog.html" class="post-title">Trump tweets false white supremacist talking</a>
</div>
</div>
</div>
</div>
</div>
</div>

<div class="col-12 col-md-4">
<div class="trending-news-area mb-50">

<div class="section-heading">
<h2>Trending</h2>
</div>

<div class="featured-post-area small-featured-post bg-img bg-overlay mb-30" style="background-image: url(img/bg-img/12.jpg);">

<div class="post-overlay">
<div class="post-meta">
<a href="index.html#"><i class="fa fa-comments-o" aria-hidden="true"></i> 2.1k</a>
<a href="index.html#"><i class="fa fa-eye" aria-hidden="true"></i> 3.6k</a>
</div>
<a href="single-blog.html" class="post-title">Hawaii braces for Hurricane Lane</a>
</div>
</div>

<div class="razo-single-post d-flex mb-30">

 <div class="post-thumbnail">
<a href="single-blog.html"><img src="../img/bg-img/17.jpg" alt=""></a>
</div>

<div class="post-content">
<div class="post-meta">
<a href="index.html#"><i class="fa fa-comments-o" aria-hidden="true"></i> 2.1k</a>
<a href="index.html#"><i class="fa fa-eye" aria-hidden="true"></i> 3.6k</a>
</div>
<a href="single-blog.html" class="post-title">Hurricane Lane brings 19 inches of rain</a>
</div>
</div>

<div class="razo-single-post d-flex mb-30">

<div class="post-thumbnail">
<a href="single-blog.html"><img src="../img/bg-img/18.jpg" alt=""></a>
</div>

<div class="post-content">
<div class="post-meta">
<a href="index.html#"><i class="fa fa-comments-o" aria-hidden="true"></i> 2.1k</a>
<a href="index.html#"><i class="fa fa-eye" aria-hidden="true"></i> 3.6k</a>
</div>
<a href="single-blog.html" class="post-title">What these victims want the Pope to know</a>
</div>
</div>

<div class="razo-single-post d-flex mb-30">

<div class="post-thumbnail">
<a href="single-blog.html"><img src="../img/bg-img/19.jpg" alt=""></a>
</div>

<div class="post-content">
<div class="post-meta">
<a href="index.html#"><i class="fa fa-comments-o" aria-hidden="true"></i> 2.1k</a>
<a href="index.html#"><i class="fa fa-eye" aria-hidden="true"></i> 3.6k</a>
</div>
<a href="single-blog.html" class="post-title">What happens if you don't have a will?</a>
</div>
</div>

<div class="razo-single-post d-flex mb-30">

<div class="post-thumbnail">
<a href="single-blog.html"><img src="../img/bg-img/20.jpg" alt=""></a>
</div>

<div class="post-content">
<div class="post-meta">
<a href="index.html#"><i class="fa fa-comments-o" aria-hidden="true"></i> 2.1k</a>
<a href="index.html#"><i class="fa fa-eye" aria-hidden="true"></i> 3.6k</a>
</div>
<a href="single-blog.html" class="post-title">Giuliani: No reason for Trump impeachment</a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>


<section class="razo-music-charts-area section-padding-80 bg-overlay bg-img jarallax" style="background-image: url(img/bg-img/31.jpg);">
<div class="container">
<div class="row">

<div class="col-sm-6">
<div class="section-heading white">
<h2>Music Chart</h2>
</div>
</div>

<div class="col-sm-6">
<div class="show-all-button mb-50 text-right">
<a href="index.html#" class="btn show-all-btn">Show All Trending (Top 10)</a>
</div>
</div>
</div>
<div class="row">
<div class="col-12">

<div class="single-music-chart d-flex align-items-center justify-content-between wow fadeInUp" data-wow-delay="100ms">

<div class="music-content d-flex align-items-center">
<div class="sl-number">
<h5>1.</h5>
</div>
<div class="music-thumb">
<img src="../img/bg-img/25.jpg" alt="">
</div>
<div class="audio-player">
<audio preload="auto" controls>
 <source src="https://preview.colorlib.com/theme/razo/audio/dummy-audio.mp3">
</audio>
</div>
<div class="music-title">
<h5>Way Back Home - <span>RadioDaily Show</span></h5>
</div>
</div>

<div class="music-price">
<a href="index.html#" class="btn razo-btn btn-2">$12.99</a>
</div>
</div>

<div class="single-music-chart d-flex align-items-center justify-content-between wow fadeInUp" data-wow-delay="300ms">

<div class="music-content d-flex align-items-center">
<div class="sl-number">
<h5>2.</h5>
</div>
<div class="music-thumb">
<img src="../img/bg-img/26.jpg" alt="">
</div>
<div class="audio-player">
<audio preload="auto" controls>
<source src="https://preview.colorlib.com/theme/razo/audio/dummy-audio.mp3">
</audio>
</div>
<div class="music-title">
<h5>Goodbye &amp; Good Riddance - <span>Juice World</span></h5>
</div>
</div>

<div class="music-price">
<a href="index.html#" class="btn razo-btn btn-2">$10.99</a>
</div>
</div>

<div class="single-music-chart d-flex align-items-center justify-content-between wow fadeInUp" data-wow-delay="500ms">

<div class="music-content d-flex align-items-center">
<div class="sl-number">
<h5>3.</h5>
</div>
<div class="music-thumb">
<img src="../img/bg-img/27.jpg" alt="">
</div>
<div class="audio-player">
<audio preload="auto" controls>
<source src="https://preview.colorlib.com/theme/razo/audio/dummy-audio.mp3">
 </audio>
</div>
<div class="music-title">
<h5>The Greatest Showman - <span>Soundtrack</span></h5>
</div>
</div>

<div class="music-price">
<a href="index.html#" class="btn razo-btn btn-2">$10.99</a>
</div>
</div>

<div class="single-music-chart d-flex align-items-center justify-content-between wow fadeInUp" data-wow-delay="700ms">

<div class="music-content d-flex align-items-center">
<div class="sl-number">
<h5>4.</h5>
</div>
<div class="music-thumb">
<img src="../img/bg-img/28.jpg" alt="">
</div>
<div class="audio-player">
<audio preload="auto" controls>
<source src="https://preview.colorlib.com/theme/razo/audio/dummy-audio.mp3">
</audio>
</div>
<div class="music-title">
<h5>Mamma Mia! Here We Go Again - <span>Soundtrack</span></h5>
</div>
</div>

<div class="music-price">
<a href="index.html#" class="btn razo-btn btn-2">$10.99</a>
</div>
</div>

<div class="single-music-chart d-flex align-items-center justify-content-between wow fadeInUp" data-wow-delay="900ms">

<div class="music-content d-flex align-items-center">
<div class="sl-number">
<h5>5.</h5>
</div>
<div class="music-thumb">
<img src="../img/bg-img/29.jpg" alt="">
</div>
<div class="audio-player">
<audio preload="auto" controls>
<source src="https://preview.colorlib.com/theme/razo/audio/dummy-audio.mp3">
</audio>
</div>
<div class="music-title">
<h5>Pray For The Wicked - <span>Panic! At The Disco</span></h5>
</div>
</div>

<div class="music-price">
<a href="index.html#" class="btn razo-btn btn-2">$10.99</a>
</div>
</div>
</div>
</div>
</div>
</section>


<section class="razo-trending-video-area section-padding-80-0 mb-50">
<div class="container">
<div class="row">

<div class="col-12">
<div class="section-heading text-center">
<h2>Trending Video</h2>
</div>
</div>
</div>
<div class="row">

<div class="col-12">
<div class="featured-trending-video mb-30 wow fadeInUp" data-wow-delay="100ms">
<iframe src="https://www.youtube.com/embed/zRvhQ5Rf6-U" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</div>

<div class="col-12 col-md-6 col-lg-4">
<div class="razo-single-post d-flex mb-30 wow fadeInUp" data-wow-delay="100ms">

<div class="post-thumbnail">
<a href="single-blog.html"><img src="../img/bg-img/2.jpg" alt=""></a>
</div>

<div class="post-content">
<div class="post-meta">
<a href="index.html#"><i class="fa fa-comments-o" aria-hidden="true"></i> 2.1k</a>
<a href="index.html#"><i class="fa fa-eye" aria-hidden="true"></i> 3.6k</a>
</div>
<a href="single-blog.html" class="post-title">Epileptic boy's cannabis let through border</a>
</div>
</div>
</div>

<div class="col-12 col-md-6 col-lg-4">
<div class="razo-single-post d-flex mb-30 wow fadeInUp" data-wow-delay="300ms">

<div class="post-thumbnail">
<a href="single-blog.html"><img src="../img/bg-img/3.jpg" alt=""></a>
</div>

<div class="post-content">
<div class="post-meta">
<a href="index.html#"><i class="fa fa-comments-o" aria-hidden="true"></i> 2.1k</a>
<a href="index.html#"><i class="fa fa-eye" aria-hidden="true"></i> 3.6k</a>
</div>
<a href="single-blog.html" class="post-title">Ben Affleck completes addic treatment</a>
</div>
</div>
</div>

<div class="col-12 col-md-6 col-lg-4">
<div class="razo-single-post d-flex mb-30 wow fadeInUp" data-wow-delay="500ms">

<div class="post-thumbnail">
<a href="single-blog.html"><img src="../img/bg-img/4.jpg" alt=""></a>
</div>

<div class="post-content">
<div class="post-meta">
<a href="index.html#"><i class="fa fa-comments-o" aria-hidden="true"></i> 2.1k</a>
<a href="index.html#"><i class="fa fa-eye" aria-hidden="true"></i> 3.6k</a>
</div>
<a href="single-blog.html" class="post-title">Boaters have close call with humpback whale</a>
</div>
</div>
</div>

<div class="col-12 col-md-6 col-lg-4">
<div class="razo-single-post d-flex mb-30 wow fadeInUp" data-wow-delay="700ms">

<div class="post-thumbnail">
<a href="single-blog.html"><img src="../img/bg-img/5.jpg" alt=""></a>
</div>

<div class="post-content">
<div class="post-meta">
<a href="index.html#"><i class="fa fa-comments-o" aria-hidden="true"></i> 2.1k</a>
<a href="index.html#"><i class="fa fa-eye" aria-hidden="true"></i> 3.6k</a>
 </div>
<a href="single-blog.html" class="post-title">Suspect in Mollie Tibbetts' killing gave false</a>
</div>
</div>
</div>

<div class="col-12 col-md-6 col-lg-4">
<div class="razo-single-post d-flex mb-30 wow fadeInUp" data-wow-delay="900ms">

<div class="post-thumbnail">
<a href="single-blog.html"><img src="../img/bg-img/6.jpg" alt=""></a>
</div>

<div class="post-content">
<div class="post-meta">
<a href="index.html#"><i class="fa fa-comments-o" aria-hidden="true"></i> 2.1k</a>
<a href="index.html#"><i class="fa fa-eye" aria-hidden="true"></i> 3.6k</a>
</div>
<a href="single-blog.html" class="post-title">Some of Mollie Tibbetts' family don't want</a>
</div>
</div>
</div>

<div class="col-12 col-md-6 col-lg-4">
<div class="razo-single-post d-flex mb-30 wow fadeInUp" data-wow-delay="1200ms">

<div class="post-thumbnail">
<a href="single-blog.html"><img src="../img/bg-img/7.jpg" alt=""></a>
</div>

<div class="post-content">
<div class="post-meta">
<a href="index.html#"><i class="fa fa-comments-o" aria-hidden="true"></i> 2.1k</a>
<a href="index.html#"><i class="fa fa-eye" aria-hidden="true"></i> 3.6k</a>
</div>
<a href="single-blog.html" class="post-title">Trump: Impeach somebody who's done great job?</a>
</div>
</div>
</div>
</div>
</div>
</section>


<section class="razo-app-download-area section-padding-80-0 bg-img bg-overlay jarallax" style="background-image: url(img/bg-img/21.jpg);">
<div class="container">
<div class="row align-items-center">

<div class="col-12 col-md-6">
<div class="app-thumbnail mb-80">
<img src="../img/bg-img/mockup-iphone.png" alt="">
</div>
</div>

<div class="col-12 col-md-6">
<div class="app-download-text mb-80">
<span>Download app and Enjoy radio &amp; music</span>
<h2>Radio Music</h2>
<p>Radio app plus is a app that lets you download videos and music from social network, Youtube, etc. You may also download and play the latest HD series and movies, and also watch free live television. This app is also available for Android and Ios.</p>
<div class="app-download-btn">
<a href="index.html#"><img src="../img/core-img/google-play.png" alt=""></a>
<a href="index.html#"><img src="../img/core-img/app-store.png" alt=""></a>
</div>
</div>
</div>
</div>
</div>
</section>


<section class="razo-weekly-schedule-area section-padding-80">
<div class="container">
<div class="row">
<div class="col-12">
<div class="weekly-schedule-table table-responsive">

<div class="col-12">
<div class="section-heading text-center">
<h2>Weekly Sehedule</h2>
</div>
</div>
<table class="table table-borderless">
<thead>
<tr>
<th scope="col">
<p>Monday</p>
</th>
<th scope="col">
<p>Tuesday</p>
</th>
<th scope="col">
<p>Wednesday</p>
</th>
<th scope="col">
<p>Thursday</p>
</th>
<th scope="col">
<p>Friday</p>
</th>
<th scope="col">
 <p>Saturday</p>
</th>
</tr>
</thead>
<tbody>
<tr>
<th scope="row">
<p>As BBC Radio 5 live</p>
<span>01:00 am - 02:30 am</span>
</th>
<td>
<h5>Andrew Peach Birthday Surprise!</h5>
<span>13:00 pm - 16:00 pm</span>
</td>
<td>
<h5>As BBC Radio 5 live</h5>
<span>23:00 pm - 02:00 am</span>
</td>
<td>
<h5>Berkshire Sport: Extra Time</h5>
<span>01:00 am - 03:30 am</span>
</td>
<td>
<h5>As BBC Radio 5 live</h5>
<span>01:00 am - 02:30 am</span>
</td>
<td></td>
</tr>
<tr>
<th scope="row">
<p>Berkshire Sport: Extra Time</p>
<span>05:30 am - 06:30 am</span>
</th>
<td></td>
<td></td>
<td>
<h5>Tony Blackburn on BBC Radio</h5>
<span>03:00 am - 05:00 am</span>
</td>
<td></td>
<td>
<h5>Stereo Underground</h5>
<span>03:00 am - 05:00 am</span>
</td>
</tr>
<tr>
<th scope="row"></th>
<td>
<h5>BBC Music Introducing in</h5>
<span>10:00 am - 12:00 pm</span>
</td>
<td>
<h5>Stereo Underground</h5>
 <span>13:00 pm - 15:00 pm</span>
</td>
<td></td>
<td>
<h5>Sport on BBC Radio Berkshire</h5>
<span>07:00 am - 09:30 am</span>
</td>
<td></td>
</tr>
<tr>
<th scope="row">
<p>Andrew Peach Birthday Surprise!</p>
<span>13:00 pm - 16:00 pm</span>
</th>
<td>
</td>
<td>
<h5>BBC Music Introducing in</h5>
<span>17:00 pm - 20:00 pm</span>
</td>
<td>
<h5>Andrew Peach Birthday Surprise!</h5>
<span>13:00 pm - 16:00 pm</span>
</td>
<td></td>
<td>
<h5>Danyl Johnson and Natasha Watts</h5>
<span>13:00 pm - 16:00 pm</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</section>


<section class="razo-latest-news-area section-padding-80 bg-overlay bg-img jarallax" style="background-image: url(img/bg-img/32.jpg);">
<div class="container">
<div class="row align-items-end">

<div class="col-sm-6">
<div class="section-heading white">
<h2>Latest News</h2>
</div>
</div>

<div class="col-sm-6">
<div class="show-all-button mb-50 text-right">
<a href="index.html#" class="btn show-all-btn">Show All Blog</a>
</div>
</div>
</div>
</div>

<div class="razo-latest-news-slide owl-carousel">

<div class="razo-single-latest-news-area bg-overlay bg-img" style="background-image: url(img/bg-img/22.jpg);">

<div class="post-content">
<a href="index.html#" class="post-title">The light and music exposition hits los angeles</a>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
</div>

<div class="post-date">
<h2>24</h2>
<p>March</p>
</div>

<div class="read-more-btn">
<a href="index.html#" class="btn">Read More <i class="fa fa-angle-double-right" aria-hidden="true"></i></a>
</div>
</div>

<div class="razo-single-latest-news-area bg-overlay bg-img" style="background-image: url(img/bg-img/23.jpg);">

<div class="post-content">
<a href="index.html#" class="post-title">The light and music exposition hits los angeles</a>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
</div>

<div class="post-date">
<h2>24</h2>
<p>March</p>
</div>

<div class="read-more-btn">
<a href="index.html#" class="btn">Read More <i class="fa fa-angle-double-right" aria-hidden="true"></i></a>
</div>
</div>

<div class="razo-single-latest-news-area bg-overlay bg-img" style="background-image: url(img/bg-img/24.jpg);">

<div class="post-content">
<a href="index.html#" class="post-title">The light and music exposition hits los angeles</a>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
</div>

<div class="post-date">
<h2>24</h2>
<p>March</p>
</div>
 
<div class="read-more-btn">
<a href="index.html#" class="btn">Read More <i class="fa fa-angle-double-right" aria-hidden="true"></i></a>
</div>
</div>
</div>
</section>


<footer class="footer-area">

<div class="main-footer-area section-padding-80-0">
<div class="container">
<div class="row justify-content-between">

<div class="col-12 col-sm-6 col-md-4 col-xl-3">
<div class="single-footer-widget mb-80">

<a href="index.html#" class="footer-logo"><img src="../img/core-img/logo2.png" alt=""></a>
<p class="mb-30">Lorem ipsum dolor sit amet, consectet adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

<div class="footer-content">

<div class="single-contact-info d-flex">
<div class="icon">
<i class="icon_pin"></i>
</div>
<div class="text">
<p>24 No. Amazing Valley, Aewsome St. New York, USA</p>
</div>
</div>

<div class="single-contact-info d-flex">
<div class="icon">
<i class="icon_phone"></i>
</div>
<div class="text">
<p>+11 123 4567890</p>
</div>
</div>

<div class="single-contact-info d-flex">
<div class="icon">
<i class="icon_mail_alt"></i>
</div>
<div class="text">
<p><a href="https://preview.colorlib.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="f59c9b939adb969a999a87999c97b59298949c99db969a98">[email&#160;protected]</a></p>
</div>
</div>
</div>
</div>
</div>

<div class="col-12 col-sm-6 col-md-4 col-xl-3">
<div class="single-footer-widget mb-80">

<h4 class="widget-title">Twitter Feed</h4>

<div class="single-twitter-feed d-flex">
<div class="tweet-icon">
<i class="fa fa-twitter"></i>
</div>
<div class="tweet">
<p><a href="index.html#">Kerem Suer</a> @kerem American conducts it first ever done strike Qaeda</p>
</div>
</div>

<div class="single-twitter-feed d-flex">
<div class="tweet-icon">
<i class="fa fa-twitter"></i>
</div>
<div class="tweet">
<p><a href="index.html#">Axel Hervelle</a> @axel_hervelle Tens of thousands attend rallies held in D.C.</p>
 </div>
</div>

<div class="single-twitter-feed d-flex">
<div class="tweet-icon">
<i class="fa fa-twitter"></i>
</div>
<div class="tweet">
<p><a href="index.html#">Chris Pratt</a> @chris_pratt Hundreds of protesters shut down meeting.</p>
</div>
</div>
</div>
</div>

<div class="col-12 col-md-4 col-xl-3">
<div class="single-footer-widget mb-80">

<h4 class="widget-title">Instagram</h4>

<div class="razo-instagram-area d-flex flex-wrap">

<div class="single-instagram-feed">
<a href="index.html#"><img src="../img/bg-img/2.jpg" alt=""></a>
</div>

<div class="single-instagram-feed">
<a href="index.html#"><img src="../img/bg-img/3.jpg" alt=""></a>
</div>

<div class="single-instagram-feed">
<a href="index.html#"><img src="../img/bg-img/4.jpg" alt=""></a>
</div>

<div class="single-instagram-feed">
<a href="index.html#"><img src="../img/bg-img/5.jpg" alt=""></a>
</div>

<div class="single-instagram-feed">
<a href="index.html#"><img src="../img/bg-img/6.jpg" alt=""></a>
</div>

<div class="single-instagram-feed">
<a href="index.html#"><img src="../img/bg-img/7.jpg" alt=""></a>
</div>

<div class="single-instagram-feed">
<a href="index.html#"><img src="../img/bg-img/8.jpg" alt=""></a>
</div>

<div class="single-instagram-feed">
<a href="index.html#"><img src="../img/bg-img/9.jpg" alt=""></a>
</div>

<div class="single-instagram-feed">
<a href="index.html#"><img src="../img/bg-img/10.jpg" alt=""></a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>


<div class="copywrite-area">
<div class="container">
<div class="row">
<div class="col-12">

<div class="copywrite-text">
<p>
Copyright &copy;<script data-cfasync="false" src="../cdn-cgi/email-decode.min.js"></script><script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
</p>
</div>
</div>
</div>
</div>
</div>
</footer>



<script src="../js/jquery.min.js"></script>

<script src="../js/popper.min.js"></script>

<script src="../js/bootstrap.min.js"></script>

<script src="../js/razo.bundle.js"></script>

<script src="../js/default-assets/active.js"></script>

<script async src="https://www.googletagmanager.com/gtag/js?id=UA-23581568-13"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-23581568-13');
</script>
</body>
</html>`;











const mySafeHTML = DOMPurify.sanitize(myHTML);

const App = () => <div dangerouslySetInnerHTML={{ __html: mySafeHTML }} />;

const Header = styled.h1`
  margin: 0;
  color: white;
  font-size: 60px;

  @media only screen and (max-width: 600px) {
    font-size: 45px;
  }
`

const Title = styled.p`
  font-size: 25px;
  margin: 0;
  color: white;
  @media only screen and (max-width: 600px) {
    font-size: 18px;
  }
`

const LoginButton = styled.a`
  color: gray;
  border: none;
  color: #444444;
  margin: 10px auto;
  padding: 15px 50px;
  border-radius: 100px;
  display: inline-block;
  background: linear-gradient(to top, #78ffd6, #a8ff78);

  :hover {
    color: #444444;
    text-decoration: none;
  }
  :focus,
  :active {
    outline: 0;
  }
`

const Information = styled.p`
  color: white;
  position: absolute;
  bottom: 0;
  text-align: right;
  right: 10px;
  font-size: 16px;
`

const Container = styled(Grid)`
  padding-top: 300px;
  grid-auto-flow: row;
  height: 100vh;
`

function Home({ history }) {
  useEffect(() => {
    const accessToken = getAccessToken()
    console.log(accessToken)
    if (accessToken) history.push('/home')
  }, [history])

  const UserName = styled.a`
    text-decoration: underline;
    color: black;
    cursor: pointer;
  `

  const LOGIN_URI =
    process.env.NODE_ENV !== 'production'
      ? 'http://localhost:8888/login'
      : 'https://razo.herokuapp.com/login'

  return (
    <Container className="gradDynamic">
      <div>
        <Header>Welcome to Razo</Header>
        <Title>Search, Choose, Listen.</Title>
        <LoginButton href={LOGIN_URI}>LOGIN</LoginButton>
        {/* <GithubCorner
          href=""
          target="_blank"
          rel="noopener noreferrer"
          bannerColor="#000000"
          octoColor="#ffffff"
        /> */}
      </div>
      <Information>
        
        <UserName
          target="_blank"
          rel="noopener noreferrer"
          href=""
        >
          
        </UserName>
        {/* <br />
        You can only login 
        <i className="fab fa-spotify" /> */}
      </Information>
    </Container>
  )
}


export default withRouter(App)
