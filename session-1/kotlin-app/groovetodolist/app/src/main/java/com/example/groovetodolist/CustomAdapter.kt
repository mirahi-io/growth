package com.example.groovetodolist

import android.content.Context
import android.content.DialogInterface
import android.graphics.Paint
import android.text.InputType
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.CheckBox
import android.widget.EditText
import android.widget.TextView
import androidx.annotation.NonNull
import androidx.recyclerview.widget.RecyclerView


internal class CustomAdapter(private var itemsList: MutableList<String>, context: Context) :
    RecyclerView.Adapter<CustomAdapter.MyViewHolder>() {
    internal inner class MyViewHolder(view: View) : RecyclerView.ViewHolder(view) {
        var itemTextView: TextView = view.findViewById(R.id.itemTextView)
        var chkbx: CheckBox = view.findViewById(R.id.itemChkBx)
    }
    var context =  context
    @NonNull
    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): MyViewHolder {
        val itemView = LayoutInflater.from(parent.context)
            .inflate(R.layout.item, parent, false)
        return MyViewHolder(itemView)

    }
    override fun onBindViewHolder(holder: MyViewHolder, position: Int) {
        val item = itemsList[position]
        holder.itemTextView.text = item
            holder.itemTextView.setOnClickListener {
                if(!holder.chkbx.isChecked)
                {
                    holder.itemTextView.setPaintFlags(holder.itemTextView.getPaintFlags() or Paint.STRIKE_THRU_TEXT_FLAG)
                }
                else{
                    holder.itemTextView.setPaintFlags(0)
                }
                holder.chkbx.setChecked(!holder.chkbx.isChecked)
            }
        holder.chkbx.setOnClickListener {
            if(holder.chkbx.isChecked)
            {
                holder.itemTextView.setPaintFlags(holder.itemTextView.getPaintFlags() or Paint.STRIKE_THRU_TEXT_FLAG)
            }
            else{
                holder.itemTextView.setPaintFlags(0)
            }
        }
        holder.itemTextView.setOnLongClickListener {
            newRemovePopup(position, item)
            true
        }

    }

    private fun newRemovePopup (position: Int, title: String) {
        val newTaskInputPopup: android.app.AlertDialog.Builder = android.app.AlertDialog.Builder(context)
        newTaskInputPopup.setTitle("remove $title?")

        newTaskInputPopup.setPositiveButton("Remove", DialogInterface.OnClickListener { dialog, which ->
            itemsList.removeAt(position)
            this.notifyDataSetChanged()

        })
        newTaskInputPopup.setNegativeButton("Cancel", DialogInterface.OnClickListener { dialog, which -> dialog.cancel() })

        newTaskInputPopup.show()

    }

    override fun getItemCount(): Int {
        return itemsList.size
    }

}