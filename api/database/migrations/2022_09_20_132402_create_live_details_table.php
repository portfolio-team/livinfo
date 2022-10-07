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
        Schema::create('live_details', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->text('live_description')->nullable();
            $table->string('image')->nullable();
            $table->dateTime('event_date')->nullable();
            $table->unsignedInteger('artist_id');
            $table->unsignedInteger('live_hall_id');
            $table->foreign('artist_id')->references('id')->on('artists');
            $table->foreign('live_hall_id')->references('id')->on('live_halls');
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
        Schema::dropIfExists('live_details');
    }
};
