<?php

Route::resource('category',App\Http\Controllers\CategoryController::class)->only(['index','store','show','update','destroy']);

Route::resource('book', App\Http\Controllers\BookController::class)->only(['index', 'store', 'show', 'update', 'destroy']);
