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
        Schema::create('bank_bills_payments', function (Blueprint $table) {
            $table->increments('bills_pay_id');
            $table->integer('sa_transact_id');
            $table->string('remarks', 1000);
            $table->decimal('amount', 19, 2);
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
        Schema::dropIfExists('bank_bills_payments');
    }
};
