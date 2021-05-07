package com.example.groovetodolist

import android.content.DialogInterface
import android.os.Bundle
import android.text.InputType
import android.view.View
import android.widget.CheckBox
import android.widget.EditText
import android.widget.TextView
import androidx.appcompat.app.AlertDialog
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView


class MainActivity : AppCompatActivity() {
    private val itemsList = mutableListOf<String>( )
    private lateinit var customAdapter: CustomAdapter
    private val m_Text = ""

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        title = "Mirahi entertainment"

        val recyclerView: RecyclerView = findViewById(R.id.tasklist)
        customAdapter = CustomAdapter(itemsList, this)
        val layoutManager = LinearLayoutManager(applicationContext)
        recyclerView.layoutManager = layoutManager
        recyclerView.adapter = customAdapter

        val fab: View = findViewById(R.id.floatingPlusButton)
        fab.setOnClickListener { view ->
            newTaskPopup()
        }



    }

    private fun newTaskPopup () {
        val newTaskInputPopup: android.app.AlertDialog.Builder = android.app.AlertDialog.Builder(this)
        newTaskInputPopup.setTitle("New task")

        val input = EditText(this)
        input.setHint("Walk the dog")
        input.inputType = InputType.TYPE_CLASS_TEXT
        newTaskInputPopup.setView(input)

        newTaskInputPopup.setPositiveButton("Add", DialogInterface.OnClickListener { dialog, which ->
            itemsList.add(input.text.toString())
            customAdapter.notifyDataSetChanged()

        })
        newTaskInputPopup.setNegativeButton("Cancel", DialogInterface.OnClickListener { dialog, which -> dialog.cancel() })

        newTaskInputPopup.show()

    }

}

