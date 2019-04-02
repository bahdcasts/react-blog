<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

$factory->define(App\User::class, function ($faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->email,
        'password' => app('hash')->make('password'),
        'remember_token' => str_random(10),
    ];
});

$factory->define(\App\Category::class, function ($faker) {
    $title = $faker->sentence(2);

    return [
        'name' => $title,
        'slug' => str_slug($title),
    ];
});

$factory->define(App\Article::class, function ($faker) {
    $title = $faker->sentence(4);

    return [
        'title' => $title,
        'slug' => str_slug($title),
        'user_id' => function () {
            return factory(\App\User::class)->create()->id;
        },
        'category_id' => function () {
            return factory(\App\Category::class)->create()->id;
        },
        'imageUrl' => $faker->imageUrl(1280, 720),
        'content' => $faker->realText(5000),
    ];
});
