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
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->text("description");
            $table->float("price");
            $table->float("sell_percent");
            $table->string("slug");
            $table->integer("year");
            $table->string("made_in");
            $table->tinyInteger("status")->default('0')->comment('1=hidden,0=visible');
            $table->mediumText("meta_title");
            $table->mediumText("meta_keywords");
            $table->mediumText("meta_description");
            $table->unsignedBigInteger('category_id')->nullable();

            $table->foreign('category_id')->references('id')->on('categories');
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
        Schema::dropIfExists('products');
    }
};
