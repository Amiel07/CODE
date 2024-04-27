<?php

namespace App\Providers;

use Illuminate\Support\Facades\Notification;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
        Inertia::share([
            'notifications' => function () {
                return \App\Models\Notification::all()->where('read_at', null);
            }
        ]);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
