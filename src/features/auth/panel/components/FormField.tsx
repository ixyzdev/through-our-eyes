// import * as React from 'react'
// import { Eye, EyeOff } from 'lucide-react'

// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import { Label } from '@/components/ui/label'

// export function FormField(props: FormFieldProps) {
//   const [isVisible, setIsVisible] = React.useState(false)
//   const isPassword = props.field.type === 'password'

//   return (
//     <div className="space-y-2">
//       <div className="flex items-center justify-between">
//         <Label htmlFor={props.field.name}>{props.field.label}</Label>
//       </div>
//       <div className="relative">
//         <Input
//           id={props.field.name}
//           name={props.field.name}
//           type={isPassword && !isVisible ? 'password' : 'text'}
//           placeholder={props.field.placeholder}
//           value={props.value ?? ''}
//           autoComplete={props.field.autoComplete}
//           required
//           className="pr-11"
//           onChange={(e) => props.onChange(props.field.name, e.target.value)}
//         />
//         {isPassword ? (
//           <Button
//             type="button"
//             variant="ghost"
//             size="icon"
//             aria-label={isVisible ? 'Ocultar contraseña' : 'Mostrar contraseña'}
//             onClick={() => setIsVisible((prev) => !prev)}
//             className="text-muted-foreground hover:text-foreground absolute inset-y-0 right-1 my-auto h-9 w-9"
//           >
//             {isVisible ? (
//               <EyeOff className="h-4 w-4" />
//             ) : (
//               <Eye className="h-4 w-4" />
//             )}
//           </Button>
//         ) : null}
//       </div>
//     </div>
//   )
// }
