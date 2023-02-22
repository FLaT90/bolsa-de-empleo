package com.empleo.demo.controller;

import com.empleo.demo.repository.CiudadanoRepository;
import com.empleo.demo.model.Ciudadano;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/ciudadanos")
public class CiudadanoController {
    @Autowired
    private CiudadanoRepository ciudadanoRepository;

    @GetMapping
    public List<Ciudadano> getAllCiudadanos() {
        return ciudadanoRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Ciudadano> getCiudadanoById(@PathVariable(value = "id") Long ciudadanoId) {
        Optional<Ciudadano> ciudadano = ciudadanoRepository.findById(ciudadanoId);
        if (ciudadano.isPresent()) {
            return ResponseEntity.ok().body(ciudadano.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public Ciudadano createCiudadano(@RequestBody Ciudadano ciudadano) {
        return ciudadanoRepository.save(ciudadano);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Ciudadano> updateCiudadano(@PathVariable(value = "id") Long ciudadanoId,
                                                     @RequestBody Ciudadano ciudadanoDetails) {
        Optional<Ciudadano> ciudadano = ciudadanoRepository.findById(ciudadanoId);
        if (ciudadano.isPresent()) {
            Ciudadano ciudadanoToUpdate = ciudadano.get();
            ciudadanoToUpdate.setTipoDocumento(ciudadanoDetails.getTipoDocumento());
            ciudadanoToUpdate.setNombres(ciudadanoDetails.getNombres());
            ciudadanoToUpdate.setApellidos(ciudadanoDetails.getApellidos());
            ciudadanoToUpdate.setFechaNacimiento(ciudadanoDetails.getFechaNacimiento());
            ciudadanoToUpdate.setProfesion(ciudadanoDetails.getProfesion());
            ciudadanoToUpdate.setAspiracionSalarial(ciudadanoDetails.getAspiracionSalarial());
            ciudadanoToUpdate.setCorreoElectronico(ciudadanoDetails.getCorreoElectronico());
            Ciudadano updatedCiudadano = ciudadanoRepository.save(ciudadanoToUpdate);
            return ResponseEntity.ok(updatedCiudadano);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Ciudadano> deleteCiudadano(@PathVariable(value = "id") Long ciudadanoId) {
        Optional<Ciudadano> ciudadano = ciudadanoRepository.findById(ciudadanoId);
        if (ciudadano.isPresent()) {
            ciudadanoRepository.delete(ciudadano.get());
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}

