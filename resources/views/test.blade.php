<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>{{ config('app.name', 'Laravel') }}</title>
    <!-- [Favicon] icon -->
    <link rel="icon" href="{{ asset('admin') }}/images/favicon.svg" type="image/x-icon">
    <!-- [Font] Family -->
    <link rel="stylesheet" href="{{ asset('admin') }}/fonts/inter/inter.css" id="main-font-link" />
    <!-- [Tabler Icons] https://tablericons.com -->
    <link rel="stylesheet" href="{{ asset('admin') }}/fonts/tabler-icons.min.css" />
    <!-- [Feather Icons] https://feathericons.com -->
    <link rel="stylesheet" href="{{ asset('admin') }}/fonts/feather.css" />
    <!-- [Font Awesome Icons] https://fontawesome.com/icons -->
    <link rel="stylesheet" href="{{ asset('admin') }}/fonts/fontawesome.css" />
    <!-- [Material Icons] https://fonts.google.com/icons -->
    <link rel="stylesheet" href="{{ asset('admin') }}/fonts/material.css" />
    <!-- [Template CSS Files] -->
    <link rel="stylesheet" href="{{ asset('admin') }}/css/style.css" id="main-style-link" />
    <link rel="stylesheet" href="{{ asset('admin') }}/css/style-preset.css" />
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet">
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    <!-- Scripts -->

</head>
<body data-pc-preset="preset-1" data-pc-sidebar-caption="true" data-pc-direction="ltr" data-pc-theme_contrast="" data-pc-theme="light">
<div class="loader-bg">
    <div class="loader-track">
        <div class="loader-fill"></div>
    </div>
</div>
<math-field>f(x)=</math-field>


<script src="{{ asset('admin') }}/js/plugins/popper.min.js"></script>
<script src="{{ asset('admin') }}/js/plugins/simplebar.min.js"></script>
<script src="{{ asset('admin') }}/js/plugins/bootstrap.min.js"></script>
<script src="{{ asset('admin') }}/js/fonts/custom-font.js"></script>
<script src="{{ asset('admin') }}/js/pcoded.js"></script>
<script src="{{ asset('admin') }}/js/plugins/feather.min.js"></script>

</body>
</html>
