<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('live_halls', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('prefecture');
            $table->string('city');
            $table->string('address');
            $table->integer('close_public_transportation')->nullable();
            $table->string('image');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('live_halls');
    }
};
