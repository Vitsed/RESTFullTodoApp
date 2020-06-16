package com.vitsed.service.impl;

import com.vitsed.repository.NoteRepository;
import com.vitsed.model.Note;
import com.vitsed.model.NoteDto;
import com.vitsed.service.NoteService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Transactional
@Service(value = "noteService")
public class NoteServiceImpl implements NoteService {

    @Autowired
    private NoteRepository noteRepository;

    @Override
    public Note save(NoteDto item) {
        Note newNote = new Note();
        newNote.setRecord(item.getRecord());
        return noteRepository.save(newNote);
    }

    @Override
    public List<Note> findAll() {
        List<Note> list = new ArrayList<>();
        noteRepository.findAll().iterator().forEachRemaining(list::add);
        return list;
    }

    @Override
    public void delete(int id) {
        noteRepository.deleteById(id);
    }

    @Override
    public Note findOne(String item) {
        return noteRepository.findByRecord(item);
    }

    @Override
    public Note findById(int id) {
        Optional<Note> optionalTodoItem = noteRepository.findById(id);
        return optionalTodoItem.orElse(null);
    }

    @Override
    public NoteDto update(NoteDto noteDto) {
        Note note = findById(noteDto.getId());
        if(note != null) {
            BeanUtils.copyProperties(noteDto, note);
            noteRepository.save(note);
        }
        return noteDto;
    }
}
