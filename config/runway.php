<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Resources
    |--------------------------------------------------------------------------
    |
    | Configure the resources (models) you'd like to be available in Runway.
    |
    */

    'resources' => [
        \App\Models\Module::class => [
            'name'      => 'Modules',
            'blueprint' => 'modules',
        ],
        \App\Models\Topic::class => [
            'name'      => 'Topics',
            'blueprint' => 'topics',
        ],
        \App\Models\Slide::class => [
            'name' => 'Slides',

            'blueprint' => [
                'tabs' => [
                    'main' => [
                        'fields' => [
                            [
                                'handle' => 'name',
                                'field'  => [
                                    'type'     => 'text',
                                    'validate' => 'required',
                                ],
                            ],
                        ],
                    ],
                ],
            ],
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Disable Migrations?
    |--------------------------------------------------------------------------
    |
    | Should Runway's migrations be disabled?
    | (eg. not automatically run when you next vendor:publish)
    |
    */

    'disable_migrations' => false,

];
