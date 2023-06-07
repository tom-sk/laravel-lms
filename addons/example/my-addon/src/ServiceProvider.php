<?php

namespace Example\MyAddon;

use Example\MyAddon\Fieldtypes\TogglePassword;
use Statamic\Providers\AddonServiceProvider;

class ServiceProvider extends AddonServiceProvider
{
    protected $vite = [
        'input' => [
            'resources/js/addon.js',
            'resources/css/addon.css',
        ],
        'publicDirectory' => 'resources/dist',
    ];

    protected $fieldtypes = [
        TogglePassword::class
    ];

    public function bootAddon()
    {
        //
    }
}
