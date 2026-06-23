# Refactoring Examples: Before & After

## Example 1: Emergency Modal in App.tsx

### Before:
```tsx
<a 
  href="tel:+43123456789" 
  className="text-xl sm:text-2xl font-black text-rose-700 hover:underline"
>
  +43 (1) 234 567 89
</a>
```

### After:
```tsx
<a
  href={`tel:${company.phoneRaw}`}
  className="text-xl sm:text-2xl font-black text-rose-700 hover:underline"
>
  {company.emergency}
</a>
```

---

## Example 2: Statistics Section in Home.tsx

### Before:
```tsx
<div className="space-y-1">
  <div className="text-3xl sm:text-4xl font-extrabold text-blue-700">12+ Jahre</div>
  <div className="text-xs sm:text-sm text-slate-500 font-semibold uppercase tracking-wider">Erfahrung am Markt</div>
</div>
<div className="space-y-1">
  <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600">150+ Objekte</div>
  <div className="text-xs sm:text-sm text-slate-500 font-semibold uppercase tracking-wider">Zufrieden Betreut</div>
</div>
```

### After:
```tsx
<div className="space-y-1">
  <div className="text-3xl sm:text-4xl font-extrabold text-blue-700">{company.stats.experience}</div>
  <div className="text-xs sm:text-sm text-slate-500 font-semibold uppercase tracking-wider">Erfahrung am Markt</div>
</div>
<div className="space-y-1">
  <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600">{company.stats.service}</div>
  <div className="text-xs sm:text-sm text-slate-500 font-semibold uppercase tracking-wider">Zufrieden Betreut</div>
</div>
```

---

## Example 3: Contact Cards in Contact.tsx

### Before:
```tsx
<a 
  href="mailto:office@hausmeisterservice-wien.at" 
  className="flex items-center gap-4 p-5 rounded-2xl border border-slate-100"
>
  <Mail className="h-5 w-5" />
  <span>office@hausmeisterservice-wien.at</span>
</a>

<a 
  href="tel:+43123456789" 
  className="flex items-center gap-4 p-5 rounded-2xl border border-slate-100"
>
  <Phone className="h-5 w-5" />
  <span>+43 (1) 234 567 89</span>
</a>
```

### After:
```tsx
<a
  href={`mailto:${company.email}`}
  className="flex items-center gap-4 p-5 rounded-2xl border border-slate-100"
>
  <Mail className="h-5 w-5" />
  <span>{company.email}</span>
</a>

<a
  href={`tel:${company.phoneRaw}`}
  className="flex items-center gap-4 p-5 rounded-2xl border border-slate-100"
>
  <Phone className="h-5 w-5" />
  <span>{company.phone}</span>
</a>
```

---

## Example 4: Footer Contact Info

### Before:
```tsx
<li className="flex items-center gap-3">
  <Phone className="h-5 w-5 text-emerald-500 shrink-0" />
  <a href="tel:+43123456789" className="hover:text-white transition-colors">
    +43 (1) 234 567 89
  </a>
</li>
<li className="flex items-center gap-3">
  <Mail className="h-5 w-5 text-emerald-500 shrink-0" />
  <a href="mailto:office@hausmeisterservice-wien.at" className="hover:text-white transition-colors">
    office@hausmeisterservice-wien.at
  </a>
</li>
```

### After:
```tsx
<li className="flex items-center gap-3">
  <Phone className="h-5 w-5 text-emerald-500 shrink-0" />
  <a href={`tel:${company.phoneRaw}`} className="hover:text-white transition-colors">
    {company.phone}
  </a>
</li>
<li className="flex items-center gap-3">
  <Mail className="h-5 w-5 text-emerald-500 shrink-0" />
  <a href={`mailto:${company.email}`} className="hover:text-white transition-colors">
    {company.email}
  </a>
</li>
```

---

## Key Pattern Changes

### Phone Numbers
- **Display**: `{company.phone}` → Shows formatted: "+43 664 XXX XXXX"
- **Links**: `href={tel:${company.phoneRaw}}` → Uses raw format: "+43664XXXXXXX"
- **Emergency**: `{company.emergency}` → Shows emergency number

### Email
- **Display**: `{company.email}` → Shows: "office@deinedomain.at"
- **Links**: `href={mailto:${company.email}}` → Creates mailto link

### Statistics
- **Experience**: `{company.stats.experience}` → "Seit 2025 in Österreich tätig"
- **Service**: `{company.stats.service}` → "Flexible Einsatzzeiten"
- **Quality**: `{company.stats.quality}` → "Persönlicher Service"
- **Support**: `{company.stats.support}` → "24/7 Erreichbarkeit"

### Address
- **Address**: `{company.address}` → "Wien, Österreich"

---

## Import Statement Required

Add to each modified file:
```tsx
import { company } from '../data/company'  // for components
import { company } from './data/company'   // for App.tsx
```
