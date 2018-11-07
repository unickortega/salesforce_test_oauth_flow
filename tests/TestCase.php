<?php

namespace Tests;

use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;

    // public function setUp()
    // {
    //     parent::setUp();

    //     \Illuminate\Support\Facades\Artisan::call('migrate:refresh');
    //     \Illuminate\Support\Facades\Artisan::call('passport:install');
    // }
}
