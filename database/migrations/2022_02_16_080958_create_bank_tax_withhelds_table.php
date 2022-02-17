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
        Schema::create('bank_tax_withhelds', function (Blueprint $table) {
            $table->id();
            $table->integer('sa_transact_id');
            $table->tinyInteger('bank_id');
            $table->dateTime('date_time');
            $table->decimal('amount', 19, 2);
            $table->string('bank_sys_msg', 500);
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
        Schema::dropIfExists('bank_tax_withhelds');
    }
};
