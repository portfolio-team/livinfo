<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Artist;

class ArtistSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Artist::create([
            'name' => 'maneskin',
            'slug' => 'maneskin',
            'profile' => 'イタリアのバンド',
            'nationality' => 'イタリア',
            'image' => '/assets/Maneskin_2018.jpeg',
        ]);

        Artist::create([
            'name' => 'the 1975',
            'slug' => 'the1975',
            'profile' => 'イギリスのバンド',
            'nationality' => 'イギリス',
            'image' => '/assets/the1975.jpeg',
        ]);

        Artist::create([
            'name' => '吉幾三',
            'slug' => 'yoshiikuzo',
            'profile' => '日本のおじさん',
            'nationality' => '日本',
            'image' => '/assets/yoshiikuzo.jpeg',
        ]);
    }
}
