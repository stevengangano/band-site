class CreateGenerators < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :event

      t.timestamps null: false
    end
  end
end
