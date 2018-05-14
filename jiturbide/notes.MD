# Notas Curso Polymer
`Autor: joseluis.iturbide@gmail.com`

## Temario

#### Semana 1
- Git
- ECMAScript6
- Package Manager
- Environment

#### Semana 2
- Browser Developer Tools
- Testing
- Responsive Design

#### Semana 3
- Polymer
- PWA

#### Semana 4
- Practica Final



# 20180426_Clase01

### Uso de consola

Creación de repositorio local
```sh
$ git init
$ git status
$ git add archivo
$ git config --global --edit
$ git commit -m "markdown title added to readme"
```

### Subir codigo por primera vez
```sh
$ git commit 
$ git commit -m "first commit"
$ git remote add origin https://github.com/jiturbide/course-may-2018.git
```

### Subir archivos que tienen commit
```sh
$ git push origin master
```
###  Descargar archivos de master
```sh
$ git pull origin master
```

### Clonar el repo de otro usuario
1. Fork desde la pagina del usuario deseado
https://github.com/AnuarHarb/course-may-2018
###  Ponerle un nombre al fork :
https://github.com/jiturbide/course-may-2019
###  Crear una carpeta para el fork clonado y cambiarse
$mkdir cloned_fork
###  Clone del fork creado desde la consola. Bajar una copia 
$git clone https://github.com/jiturbide/course-may-2019.git
###  Para ver a que repositorios estas ligado, hacerlo desde  el directorio con .git
git remote -v
###  Asociar el label upstream con repo forkeado. En el directorio con .git
$ git remote add upstream https://github.com/jiturbide/course-may-2019.git
###  Ver los repositorios que se tienen ligados
$ git remote -v
upstream        https://github.com/jiturbide/course-may-2019.git (fetch)
upstream        https://github.com/jiturbide/course-may-2019.git (push)
origin  https://github.com/jiturbide/course-may-2019.git (fetch)
origin  https://github.com/jiturbide/course-may-2019.git (push)

### Crear archivo desde la web en el fork
Despues descargarlo LABEL_LOCAL  LABEL_MASTER_FORKEADO
```sh
$git pull upstream master
```


### Quitar el add a un archivo
```sh
$ git reset HEAD archivo
```

### Editar los archivos no desdeados
PENDIENTE con .git ignore

### Agregar todos los archivos
```sh
$ git add -A
```
### Agregar todos los *.txt
```sh
git add '*.txt'  
```

## GIT

[Empezando-Fundamentos-de-Git](https://git-scm.com/book/es/v1/Empezando-Fundamentos-de-Git)

> Fue creado en 2005 para almacenar los cambios del proyecto Linux que buscaba:
	- Velocidad
	- Diseño Sencillo
	- Apoyo al desarrollo no lineal (Miles de ramas paralelas)
	- Completamente distribuido
	- Capaz de manejar proyectos grandes.

Git guarda modela sus datos como instantaneas, no guada fragmentos de cambios. Guarda una instantanea de los archivos en el momento. Si un archivo no ha cambiado sol guarda una referencia

## Funcionamiento

Git guarda los cambios en una BD local, no necesita salir a la red para saber las diferencias.

Git comprueba la integridad de cada archivo mediante SHA-1 

3 Estados

Git tiene 3 estados en los que puede estar un archivo Tracked
Archivo Tracked
- Commited, confirmado y guardado en la base de datos local.
- Modified, Modificado pero no agregado a la BD local
- Staged, (Preparado) archivo marcado en su versión actual para que se vaya en el proximo commit.

Archivo Untracked
- Cualquier archivo que no estaba en el repo original y no se ha agregado


Git Directory, es donde Git almacena los metadatos y la BD de objetos del proy. Es la parte mas importante de Git y es lo que se copia cuando clonas un repo.

El Working directory es una copia de una version del proyecto. Estos archivos se sacan de la BD comprimida en el directorio y se colocan en disco para que se puedan usar.

El Stagging Area es un archivo, generalmente ubicado en el dir de Git que almacena info de lo que va a ir en la proxima confirmacion.


### Flujo de trabajo

El flujo de trabajo básico en Git es algo así:
1. Modificas una serie de archivos en tu directorio de trabajo.
2. Preparas los archivos, añadiendolos a tu área de preparación.
3. Confirmas los cambios, lo que toma los archivos tal y como están en el área de preparación, y almacena esas instantáneas de manera permanente en tu directorio de Git.


### Instalacion

### Configuracion
```sh
$ git config --global user.name "Jose Luis Iturbide" 
$ git config --global user.email jose.iturbide@softtek.com
$ git config --list

$ git config core.editor='C:\Program Files (x86)\Notepad++\notepad++.exe' -multiInst -notabbar -nosession -noPlugin
```

### Creando un repositorio Git
```sh
$ mkdir directorioConGit
$ cd directorioCongit
$ git init
```
Se crea un directorio .git

### Clonando un repositorio existente
Se crea una copia de los archivos que no esta enlazada con el repo existente pero que inmediatamente entra en estado Tracked local
```sh
$ git clone git://github.com/schacon/grit.git mygrit
$ git clone git://github.com/schacon/simplegit-progit.git
```




```sh
$ git status
```


Muestra las difierencias entre el archivo en tu area de trabajo y lo que se ha preparado unmodified, modified VS staged
```sh
$ git diff
```

Muestra las diferencias entre la ultima version y lo preparado
```sh
$ git diff --cached
$ git diff --staged
```

### Ver los cambios
```sh
$ git commit -m "" - v 
```

### Saltarse el stagging git add
```sh
$ git commit -a -m "Comentario" 
```
###  Borra el archivo del filesystem pero falta todavia confirmarlo
```sh
$ git rm archivo
```
###  Si el archivo estaba en staging para asegurar borrarlo sin confirmarlo
```sh
$ git rm -f archivo
```
### Quita del area de staging
```sh
git rm --cached readme.txt
```

### Mover nombres de archivos, evita hacer 3 comandos de copia, borrado y confirmacion
```sh
$ git mv file_from file_to
```

###  Resumen de las confirmaciones
```sh
$ git log --stat
```

### Se puede cambiar el formateo para mandarlo a otros programas
```sh
$ git log --pretty=format:"%h - %an, %ar : %s"
```
##### Toma los mismos archivos de la confimacion anterior pero permite hacer cambios en el mensaje
```sh
git commit --amend
```

### Quita de staging el archivo
```sh
git reset HEAD archivo
```

### Deshacer los cambios sin rastro
git checkout -- benchmarks.rb


## REPOSITORIOS REMOTOS
```sh
git remove -v 
origin - repositorio desde el que se clono una copia
```


###  Agregar un repor remoto, opcion 1,
```sh
$ crear directorio, cambiarse
$ git init
$ git remote add remoteAlias git://github.com/schacon/simplegit-progit.git
```

###  Este comando recupera todos los datos del proyecto que no tengas,  que otros hayan modificado desde el ultimo fetch
```sh
$ git fetch [remoteAlias] 
$ git pull [remoteAlias] [localBranch]
Ej.
$ git fetch repoRemoto
$ git pull repoRemoto master
```

###  La clonacion crea una carpeta, baja los archivos, agrega el repo remoto con alias default origin. Por lo que el siguiente comando actualiza los archivos que han cambiado en el repo desde que se clono.
```sh
$ git fetch origin
```

### Envio de modificaciones
```sh
git push [alias-remoto] [nombre-rama]
git push upstream master
```


Este comando funciona únicamente si has clonado de un servidor en el que tienes permiso de escritura, y nadie ha enviado información mientras tanto. Si tú y otra persona clonass a la vez, y él envía su información y luego envías tú la tuya, tu envío será rechazado

Como buena practica hay que hacer pull primero

```sh
$ git remote rename aliasRemoto aliasNuevoRemoto
$ git remote remove jiturbide
$ pull upstream
$ push origin
```

### Pull Request from another users
```
$ git pull anuar_remote master
```



