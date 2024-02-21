const usuarioTienePermiso = true
const navegadorTienePermiso = false

if (usuarioTienePermiso && navegadorTienePermiso) {
    console.log("Usuario y navegador tiene permiso")
} else {
    console.log("Sin permiso")
}

if (usuarioTienePermiso || navegadorTienePermiso) {
    console.log("Usuario o navegador tiene permisos")
}