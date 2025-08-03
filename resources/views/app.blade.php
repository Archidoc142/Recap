<!DOCTYPE html>
<html class="{{ auth()->user()?->light_mode ? '' : 'dark' }}" lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Re:cap') }}</title>

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class='dark:bg-gray-900 dark:text-white bg-gray-200'>
        @inertia
    </body>
</html>
