class CreateSaves < ActiveRecord::Migration[5.2]
  def change
    create_table :saves do |t|
      t.string :store
      t.string :info

      t.timestamps
    end
  end
end
