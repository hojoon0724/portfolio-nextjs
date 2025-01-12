# Hojoon Kim's Portfolio

## General Structure

1. Data: json of tech, design, and icons shown
2. Components
3. Sections: page sections used initially to reorder sections, might still use it
4. Pages: sub-pages for project details

### Data

1. Tech Projects

```
{
  title: [str],
  logo: [url] './assets/logos/...,
  text: [description],
  stack: [iconsData.[iconName], ...]
  repoLinks: [
    {
      button: [str],
      icon: [url],
      openOnNewWindow: [bool],
      url: [url]
    }
  ],
  mainLink: {
    icon: [url],
    openOnNewWindow: [bool],
    url: [url],
    appStore (optional): [bool],
  },
}
```

2. Design Projects

```
{
  title: [str],
  logo: [url] './assets/logos/...,
  text: [description],
  stack: [iconsData.[iconName], ...]
  tags: [str,str,...]
  repoLinks: [],
  mainLink: {
    button: [str]
    icon: [url],
    openOnNewWindow: [bool] (false, stays in),
    url: [url],
  },
}
```

3. Icons Data
   List of icons to reference in projects when listing 'stack'

```
{
  iconName: {
    name: [str] (same as iconName, redundancy),
    fileName: [url] (finds the file),
    description: [str] (str that will show as 'alt'),
  }
}
```

### Components

### Sections

### Pages
