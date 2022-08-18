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
        Schema::create('bank_transfer_money', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('sa_transact_id');
            $table->tinyInteger('bank_id');
            $table->dateTime('date_time');
            $table->string('receipient_acct_no', 50);
            $table->decimal('amount', 19, 2);
            $table->string('remarks', 1000);
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
        Schema::dropIfExists('bank_transfer_money');
    }
};
