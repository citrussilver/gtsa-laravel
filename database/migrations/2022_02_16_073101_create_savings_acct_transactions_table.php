<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

use App\Models\Bank;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('savings_acct_transactions', function (Blueprint $table) {
            $table->increments('sa_transact_id');
            //$table->foreignIdFor(Bank::class, 'bank_id');
            // hopefully can be omitted if created_at column doesn't have problems
            $table->dateTime('date_time');
            $table->tinyInteger('bank_transact_type_id', 3);
            $table->decimal('amount', 19, 2);
            $table->decimal('current_balance', 19, 2);
            $table->string('remarks', 1000);
            $table->decimal('post_transact_balance', 19, 2);
            $table->string('location', 200);
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
        Schema::dropIfExists('savings_acct_transactions');
    }
};
