<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

use App\Models\CreditCardTransaction;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('credit_card_loans', function (Blueprint $table) {
            $table->increments('cc_loan_id');
            $table->integer('cc_transact_id');
            $table->timestamps();
            $table->foreign('cc_transact_id')
                ->references('cc_transact_id')
                ->on(CreditCardTransaction::class)
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
        Schema::dropIfExists('credit_card_loans');
    }
};
