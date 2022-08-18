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
        Schema::create('bank_prepaid_reloads', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('sa_transact_id');
            $table->dateTime('date_time');
            $table->tinyInteger('prepaid_card_id');
            $table->decimal('current_balance', 19, 2);
            $table->decimal('amount', 19, 2);
            $table->decimal('post_transact_balance', 19, 2);
            $table->timestamps();
            $table->foreign('sa_transact_id')
                ->references('sa_transact_id')
                ->on(SavingsAcctTransaction::class)
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('bank_prepaid_reloads');
    }
};
